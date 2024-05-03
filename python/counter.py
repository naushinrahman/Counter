# counter.py

import os

# Path to the file where the counter will be stored
counter_file = 'counter.txt'

def get_counter():
    if not os.path.exists(counter_file):
        # Create counter file if it doesn't exist
        with open(counter_file, 'w') as f:
            f.write('0')
    with open(counter_file, 'r') as f:
        return int(f.read())

def increment_counter():
    counter = get_counter()
    counter += 1
    with open(counter_file, 'w') as f:
        f.write(str(counter))

if __name__ == "__main__":
    increment_counter()
