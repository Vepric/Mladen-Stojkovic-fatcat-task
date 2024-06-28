## Project setup and start

It's the usual, old: 
0. git checkout main
1. npm install 
2. npm run dev 

I was using Node v20.11.0

### Project Layout 

It's a simple layout where user scrolls on the main page and tasks pop in view 1 by 1 

### Users List 

Here I wanted to pretty much emulate a more realistic list render scenario,
so I made an infinite scrolling list with useInfiniteQuery and reactIntersectionObserver

### Form Generator 

Example was probably using MUI, but I made simple components from scratch here just to make it feel
a bit more agnostic.

### Page Generator

Alongside regular components, I added the option for a user to pass html components as well.


### One elephant in the room

Why does the folder structure look so hectic and bunched up?
Well... pretty much because of this little guy ---> 'import/no-relative-parent-imports': 'error' 

This rule has pretty much forced me last minute to reorganize 
the whole project folder structure. (I should've ran the lint command way earlier, so that's on me).

#I was originally developing the folder structure in this format 

## src/
src/
│
├── components/
│   ├── atoms/
│   │   └── index.ts
│   ├── molecules/
│   │   └── index.ts
│   └── organisms/
│       └── index.ts
│
├── constants/
│   └── index.ts
│
├── hooks/
│   └── index.ts
│
└── models/
    └── index.ts

This structure along with @homework-task alias looked nice, but I wanted to comply with the rules 
and didn't have enough time to potentialy split the project into multiple packages or create a 
monorepo out of it. 

At the end of the day, all types, pre-commit hook and linting checks are passing.

### Thank you for reading and have a nice day!