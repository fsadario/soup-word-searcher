# Alphabet Soup Word Searcher in Typescript
This was an technical exam question that relies in return true or false if a word is present or not in an alphabet soup.

The conditions of the search are:
- Word disposal may be horizontal or vertical, not diagonal.
- Word orientation may be in any direction, that means it could be horizontal, vertical, left to right or backwards, up to down or backwards.
- There could be a change of direction in the middle of the word, it means that a part of the word could be vertical and up to down, and the another part could be horizontal right to left.

Some examples:

HORIZONTAL

X X X X X X X  
X C R A Z Y X  
X X X X X X X   
X X X X X X X   
X X X X X X X

VERTICAL

X X X X X X X  
Y X X X X X X   
Z X X X X X X  
A X X X X X X   
R X X X X X X  
C X X X X X X  
X X X X X X X  

HORIZONTAL AND VERTICAL

X X C X X X X X    
X X R X X X X X    
X X A X X X X X   
X X Z Y X X X X    
X X X X X X X X 

X X X X X X X X  
X X X Y X X X X  
X X X Z X X X X   
X X X A R C X X  
X X X X X X X X   
