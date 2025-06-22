const fs = require('fs/promises') 



class LoadFilename {
    constructor(filePath, content){
        this.filePath = filePath,
        this.content = content
    };

    // setFilePath(){
    //     return this.filePath
    // };

    // setContent(){
    //     return this.content
    // };
};


// Read File Service
class readFile {
     constructor(filePath){
        this.filePath = filePath
    };

    async readFile (){
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            console.log(data)
        } catch (error) {
            console.error('Error - unable to read file:', error);
        }
    };
};

const filePath = new LoadFilename('../test-files/sample.txt');
const readText = new readFile(filePath.filePath);
// console.log(filePath)
readText.readFile();


//Write File Service

const content = 'This is my task submission'; 
const filename = '../Dep_Injection/output.txt';

class WriteFile {
    constructor({filePath, content}){
        this.filePath = filePath,
        this.content = content
    };

    async writeFile (){
    try {
        await fs.writeFile(this.filePath, this.content);
        console.log(`Content: ${this.content} written successfully to ${this.filePath}!`);
    } catch (err) {
        console.log('Error writing file', err);
    }
  }
};

const path = new LoadFilename(filename, content);
const writeText = new WriteFile(path);
writeText.writeFile();
