# Routine Builder

A React + TypeScript and Express project focused on the backtracking algorithm to build conflict-free course routines.

Pick the courses you want to take, and the app searches every available section of each one to find combinations where no two classes overlap.

## How it works

Each course has multiple sections, and each section meets on fixed days and times. The solver picks one section per course recursively — if a section clashes with anything already chosen, that branch is abandoned and it backtracks to try the next option.

## Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript
