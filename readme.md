# Electric Charges

**This project features a simulation of electric charges moving in 2d space, illustration of coulomb's law.**
[Click here to play](https://htmlpreview.github.io/?https://github.com/danielperr/electricCharges/blob/master/index.html) 

### Controls
* Place positive charges using left-click, negative ones using right-click.

When two charges collide, they will "stick" together. Try forming shapes with them!
The charge's color intensity tells how strong the charge is. Blue is for positive charges, red is for negative charges.

### Todo List
- [ ] Add adjustable charge power when placing charges
- [ ] Add pause / resume button
- [x] Add time multiplier (Currently only in console, soon in a menu)
- [ ] Add a delete tool
- [x] Add option for placing a fixed charge, one that is fixed in place and doesn't move (Currently only in console, soon in a menu)
- [ ] Add friction
- [ ] Add move tool

### Console Tricks
* You can change the variable "timeMultiply" to make the time run faster (but program becomes less stable). Default value is 1.
* The function staticMode() will toggle static mode. When on, charges you place are fixed in place and cannot move.

### Change log
* **March 14th 2017:** 
  - Repository created
* **March 14th 2017:**
  - Updated readme.md
* **March 18th 2017:**
  - Wall bounce is now more stable
  - Charges now stick together instead of sharing their charge
  - Small scale fixes and changes