import os

counter_file = 'counter.txt'

def get_counter():
    if not os.path.exists(counter_file):
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
