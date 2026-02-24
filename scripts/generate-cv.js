import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const PORT = 4321;
const URL = `http://localhost:${PORT}/cv`;

async function generate() {
    console.log('Building Astro project...');
    await new Promise((resolve, reject) => {
        const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
        build.on('close', (code) => {
            if (code !== 0) reject(new Error('Build failed'));
            else resolve();
        });
    });

    console.log('Starting preview server for PDF capture...');
    const preview = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
        stdio: 'ignore',
        detached: true,
    });

    console.log(`Waiting for ${URL} to become available...`);
    let retries = 15;
    while (retries > 0) {
        try {
            const res = await fetch(URL);
            if (res.ok) break;
        } catch (e) {
            // ignore
        }
        await new Promise(r => setTimeout(r, 1000));
        retries--;
    }

    if (retries === 0) {
        console.error('Failed to start preview server (timeout).');
        process.kill(-preview.pid);
        process.exit(1);
    }

    console.log('Navigating to CV page and generating PDF...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: 'public/cv.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log('✅ Generated CV successfully at "public/cv.pdf"');

    try {
        process.kill(-preview.pid);
    } catch (e) {
        preview.kill();
    }
}

generate().catch(console.error);
