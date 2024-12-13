import pandas as pd
import os
import numpy as np  # Import numpy for NaN

# Define the Excel file name
file_name = 'match_data.xlsx'
print('--- Welcome to FTC Scouting Assistant by 24255. ---')
print('--- Functions ---')
print('Copy Data from Website to input blank and press enter to automatically log data into match_data.xlsx.')
print('Type "clear" to clear all data.')
print('Type "q" to quit.\n')

# Function to clear all data in the Excel file
def clear_excel_data():
    if os.path.exists(file_name):
        # Load existing data
        df = pd.read_excel(file_name)
        # Clear all data while keeping the headers by replacing with NaN
        df.loc[:, :] = np.nan  # Set all values to NaN
        # Write the cleared DataFrame back to Excel
        df.to_excel(file_name, index=False)
        print("[Data Cleared]")
    else:
        print("[ERROR][Excel File does not exist.]")

# ---- Main -----
while True:
    user_input = input("[Input] ")
    
    if user_input.lower() == 'q':
        break
    
    if user_input.lower() == 'clear':
        clear_excel_data()
        continue
    
    data_list = user_input.split(',')
    
    if len(data_list) != 14:
        print("[ERROR][Input is Invalid.][Check input format.]")
        continue
    
    if os.path.exists(file_name):
        df = pd.read_excel(file_name)
        df.loc[len(df)] = data_list
    else:
        # New DataFrame
        df = pd.DataFrame([data_list], columns=[
            'Match Type', 'Team Number', 'Match Number', 'Auto Position',
            'Auto Sample Missed', 'Auto Specimen Scored', 'Park', 'Cycles',
            'Tele Samples Scored', 'Tele Samples Missed', 'Ascent Tier',
            'Ascent Time', 'Partner Climbing', 'Comments'
        ])

    # Write to Excel
    df.to_excel(file_name, index=False)
    print("[Saved Successfully]")

print("[Exiting.]")
