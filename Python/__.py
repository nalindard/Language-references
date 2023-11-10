import psutil
import time

with open('random_text.txt', mode="w", encoding="utf-8") as f:
    f.write("random\nrandom\nrandom\nrandom\nrandom")


while True:
    memory_usage = psutil.virtual_memory()
    print(f"Memory Usage: {memory_usage.percent}%")
    time.sleep(1)
