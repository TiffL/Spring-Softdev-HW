import time

def nameArgs(f):
    def inner(*arg):
        print f.func_name + ": " + str(arg)
        return f(*arg)
    return inner

@nameArgs
def fib(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1)+fib(num-2)

def execution_time(f):
    def inner(*arg):
        startTime = time.time()
        f(*arg)
        print "execution time: " + str(time.time()-startTime)
        return f(*arg)
    return inner

closure = nameArgs(fib)
print closure(5)

closure2 = execution_time(fib)
print "\n"
print closure2(4)
