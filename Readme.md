# Node.js File Manager

## Description

The File Manger is able to do the following:

- work using CLI
- perform basic file operations (copy, move, delete, rename, etc.)
- utilize Streams API
- get information about the host machine operating system
- perform hash calculations
- compress and decompress files

## Usage

Start the program:

```bash
npm run start -- --username=TheBestReviewerInTheWorld
```

Add commands to the CLI and get a result:

```bash
up # Go upper from current directory

cd d: # Go to dedicated folder from current directory
cd folder # Go to dedicated folder from current directory
cd d:\folder # Go to dedicated folder from current directory

ls # Print in console list of all files and folders in current directory

cat file.txt #Read file and print it's content in console
cat d:\file.txt #Read file and print it's content in console

add file.txt #Create empty file in current working directory

rn old.txt new.txt # Rename file
rn d:\folder\old.txt new.txt # Rename file

cp file.txt d:\ # Copy file
cp c:\folder\file.txt d:\folder # Copy file

mv file.txt d:\ # Move file
mv c:\folder\file.txt d:\folder # Move file

rm file.txt # Delete file
rm d:\folder\file.txt # Delete file

os --EOL # Get EOL
os --cpus # Get host machine CPUs info
os --homedir # Get home directory
os --username # Get current system user name
os --architecture # Get CPU architecture

hash file.txt # Calculate hash for file
hash d:\folder\file.txt # Calculate hash for file

compress file.txt file.txt.br # Compress file
compress file.txt d:\folder\file.txt.br # Compress file
compress d:\folder\file.txt d:\file.txt.br # Compress file

decompress file.txt.br file.txt # Decompress file
decompress file.txt.br d:\folder\file.txt # Decompress file
decompress d:\folder\file.txt.br d:\file.txt # Deompress file
```

To finish the program use `Ctrl + C` or type `.exit`

## Notes

Whether you need to implement file or folder names with whitespaces, wrap your arguments in single or double quotes:

`cd 'C:\Program Files'`

`cd "C:\Program Files"`
