const fs = require('fs');
const path = require('path');

const scriptsDir = path.join(__dirname, 'Scripts');
const outputDir = path.join(__dirname, 'src');
const outputFile = path.join(outputDir, 'cs_scripts_doc.js');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let fileContent = '/**\n * @file Auto-generated documentation for C# scripts\n */\n\n';

function walkSync(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    files.forEach(function (file) {
        const filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            if (file.endsWith('.cs')) {
                filelist.push(filepath);
            }
        }
    });
    return filelist;
}

const csFiles = walkSync(scriptsDir);

csFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(__dirname, file).replace(/\\/g, '/');

    // Simple regex to find class definition
    const classMatch = content.match(/class\s+(\w+)(\s*:\s*(\w+))?/);
    if (classMatch) {
        const className = classMatch[1];
        const inherits = classMatch[3] ? classMatch[3] : '';

        fileContent += `/**\n * Class representing ${className}.\n`;
        if (inherits) {
            fileContent += ` * @extends ${inherits}\n`;
        }
        fileContent += ` * @description Defined in ${relativePath}\n */\n`;
        fileContent += `class ${className} {\n`;

        // Find public fields
        const fieldRegex = /public\s+(\w+)\s+(\w+)\s*(=\s*[^;]+)?;/g;
        let fieldMatch;
        while ((fieldMatch = fieldRegex.exec(content)) !== null) {
            const type = fieldMatch[1];
            const name = fieldMatch[2];
            fileContent += `    /**\n     * ${name}\n     * @type {${type}}\n     */\n    ${name};\n\n`;
        }

        // Find methods (simplified)
        const methodRegex = /(public|private|protected)\s+(\w+)\s+(\w+)\s*\(([^)]*)\)/g;
        let methodMatch;
        while ((methodMatch = methodRegex.exec(content)) !== null) {
            const access = methodMatch[1];
            const returnType = methodMatch[2];
            const name = methodMatch[3];
            const params = methodMatch[4];

            // Skip standard Unity methods usually
            if (['Start', 'Update', 'FixedUpdate', 'Awake'].includes(name)) continue;

            fileContent += `    /**\n     * ${name}\n     * @access ${access}\n     * @return {${returnType}}\n`;

            let paramNames = [];
            if (params.trim()) {
                const paramList = params.split(',');
                paramList.forEach(p => {
                    const parts = p.trim().split(/\s+/);
                    if (parts.length >= 2) {
                        fileContent += `     * @param {${parts[0]}} ${parts[1]}\n`;
                        paramNames.push(parts[1]);
                    }
                });
            }

            fileContent += `     */\n    ${name}(${paramNames.join(', ')}) {}\n\n`;
        }

        fileContent += `}\n\n`;
    }
});

fs.writeFileSync(outputFile, fileContent);
console.log(`Generated C# docs in ${outputFile}`);
