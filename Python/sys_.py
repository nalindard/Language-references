import os
import platform
import sys
import sysconfig

print(os.getcwd())
print(os.cpu_count())
print(os.name)
print(os.__name__)

print(platform.system())
print(platform.release())
print(platform.machine())
print(platform.architecture())

print(sys.platform)
print(sysconfig.get_platform())
