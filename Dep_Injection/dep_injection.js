class LoadFile {
    constructor(filePath){
        this.filePath = filePath
    };

    setFilePath(){
        return this.filePath
    };
};

class readFile {
     constructor(filePath){
        this.filePath = filePath
    };

    async readFileAsync (){
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            console.log(data)
        } catch (error) {
            console.error('Error - unable to read file:', error);
        }
    };
};

const filePath = new LoadFile('./test-files/sample.txt').setFilePath()
const readText = new readFile(filePath);

// console.log(filePath)
readText.readFileAsync();