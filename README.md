# FTC Scouting Assistant
### Brought to you by FTC Team 24255

The **FTC Scouting Assistant** is designed to provide an easy-to-use on-site scouting tool for FTC teams. This version is specifically tailored for the **2024 FTC "Into the Deep"** season.

## How to Use

The **24255 Scouting Assistant** consists of two main components: a **Webpage** and a **Python script**.

## Installation Requirements
To run the offline python module, make the following python modules are installed:
panda
os
numpy
to install a pip module, simply type in the command module "pip install module_name".

### Webpage

1. Visit the [Scouting Assistant Webpage](https://24255scouting.github.io/).
2. You can also download the webpage files from our GitHub repository.
3. On the main page, record the performance of a team during a specific match by filling in all the required fields.
4. After entering the data, you have two options:
   - Click on the **[Generate QR Code]** button to create a QR code containing the entered information. This QR code can be scanned and the data can be inputted into the Python console.
   - Click on the **[Copy Data]** button to copy the information directly to your clipboard for easy pasting.

### Python Script

1. Download the Python script (`main.py`) manually from the GitHub repository.
2. Run the Python code. Wait for it to initialize until you see the **[Input]** prompt.
3. Paste the data copied from the webpage into the console and press **Enter**.
4. The script will automatically save the information into an Excel file named `match_data.xlsx` in the same directory as the Python file. If the file does not exist, it will be created. Each new entry will be saved on the next line.
5. To exit the program, press **q** and then **Enter**. If you want to reset the Excel file, type **"clear"** and press **Enter**. Note that using the clear function may generate warnings, but it will not affect the code, and the Excel file will still be reset.
6. **Important:** Ensure that the `match_data.xlsx` file is closed while running the code to avoid errors.

## Conclusion

The FTC Scouting Assistant is a tool designed to streamline the scouting process for teams. Feel free to distribute, download, edit, or re-publish the code. Happy Scouting!
