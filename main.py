import pandas as pd
import os
import numpy as np

file_name = 'match_data.xlsx'
print('--- Welcome to FTC Scouting Assistant by 24255. ---')
print('--- Functions ---')
print('Copy Data from Website to input blank and press enter to automatically log data into match_data.xlsx.')
print('Type "clear" to clear all data.')
print('Type "q" to quit.\n')

def clear_excel_data():
    if os.path.exists(file_name):
        df = pd.read_excel(file_name)
        df.loc[:, :] = np.nan
        df.to_excel(file_name, index=False)
        print("[Data Cleared]")
    else:
        print("[ERROR][Excel File does not exist.]")

while True:
    user_input = input("[Input] ")
    
    if user_input.lower() == 'q':
        break

    if user_input.lower() == 'clear':
        clear_excel_data()
        continue

    data_lines = user_input.strip().splitlines()
    for line in data_lines:
        data_list = line.split(',')
        
        if len(data_list) != 18:
            print("[ERROR][Input is Invalid.][Check input format.]")
            continue

        if os.path.exists(file_name):
            df = pd.read_excel(file_name)
            df.loc[len(df)] = data_list
        else:
            df = pd.DataFrame([data_list], columns=[
                'Match Type', 'Cycles', 'Team Number', 'Match Number',
                'Auto Position', 'Auto Sample Scored',
                'Auto Sample Missed', 'Auto Specimen Scored',
                'Auto Specimen Missed', 'Park?',
                'Tele Sample Scored', 'Tele Sample Missed',
                'Tele Specimen Scored', 'Tele Specimen Missed',
                'Ascent Tier', 'Ascent Time',
                'Partner Climb?', 'Comments'
            ])

        df.to_excel(file_name, index=False)
        print("[Saved Successfully]")

print("[Exiting.]")
