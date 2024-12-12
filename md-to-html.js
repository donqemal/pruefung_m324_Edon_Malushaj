import { readFile, writeFile } from 'fs/promises';
import { marked } from 'marked';
import { join } from 'path';

const inputFilePath = join(process.cwd(), 'task-3.md');
const outputFilePath = join(process.cwd(), 'task-3.html');

async function convertMarkdownToHtml() {
    try {
        const markdownContent = await readFile(inputFilePath, 'utf-8');

        const htmlContent = marked(markdownContent);

        await writeFile(outputFilePath, htmlContent, 'utf-8');

        console.log(`Successfully converted to HTML: ${outputFilePath}`);
    } catch (error) {
        console.error('Error during conversion:', error.message);
    }
}

convertMarkdownToHtml();
