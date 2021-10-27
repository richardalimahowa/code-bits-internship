import iter tools 
(K,N) = map(int,input().strip().split(""))
L = list()
for i in range(k):
   l = list(map(int,input().strip().split("")))
   n = l[0]
   L.append(1[1])
   assert len(L[i]) == n
s_max = 0
L_max = None
for l in itertools product (*L):
  s = sum([x**2 for x in l])%N
  if s>s_max:
    s_max = s
    L_max = l
print(s_max)
