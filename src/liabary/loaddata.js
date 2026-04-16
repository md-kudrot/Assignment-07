import fs from 'fs';
import path from 'path';

export function getJsonData() {
    const filePath = path.join(process.cwd(), 'public', "friends.json");
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}