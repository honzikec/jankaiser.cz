import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const PORT = 4322;
const URL = `http://localhost:${PORT}/cv`;
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const shellCmd = process.platform === 'win32';

async function generate() {
    console.log('Starting dev server for PDF capture...');
    const preview = spawn(npmCmd, ['run', 'dev', '--', '--port', PORT.toString()], {
        stdio: 'ignore',
        detached: false,
        shell: shellCmd,
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
        console.error('Failed to start dev server (timeout).');
        preview.kill();
        process.exit(1);
    }

    console.log('Navigating to CV page and generating PDF...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: 'networkidle0' });

    await page.pdf({
        path: 'public/download/jankaiser_cv_en.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log('✅ Generated CV successfully at "public/download/jankaiser_cv_en.pdf"');

    preview.kill();
}

generate().catch(console.error);
