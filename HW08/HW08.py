def union(S1,S2):
    return [x for x in S1] + [x for x in S2 if x not in S1]

def intersection(S1,S2):
    return [x for x in S1 if x in S2]

def setDifference(SetU,SetA):
    return [x for x in SetU if x not in SetA]

def symmetricDiff(S1,S2):
    return setDifference(union(S1,S2),intersection(S1,S2))

def cartesianProduct(S1,S2):
    return [(x,y) for x in S1 for y in S2]
    
print union(['a','b'],['a','c','d'])
print intersection(['a','b'],['a','c','d'])
print setDifference(['a','b'],['a','c','d'])
print setDifference(['a','c','d'],['a','b'])
print symmetricDiff(['a','b'],['a','c','d'])
print cartesianProduct(['a','b'],[1,2,3])
