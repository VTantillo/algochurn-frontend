# Tasks

- [ ] Create a Grid of Cards that takes in an array of details, provided in the codebase as cardDetails.
- [ ] The grid should move to the left. Once the cards in the cardDetails are over, loop over and start with the first card again.
- [ ] A card has some details associated, and those are: - Name, Image, Link and Content
- [ ] If the card is hovered over, the speed is slowed down by 10 units.
- [ ] If the card is clicked, The user is taken to the href page, as given in the cardDetails array.
- [ ] Every card is Randomly rotatated by some degrees.

## Hints

- Try using `useRef` hook to mutate and transform your cards.
- The most common property to move an element is `translate`. You can use `transform: translate` in CSS to move an element from one position to another.
- Use `onMouseEnter` and `onMouseLeave` to trigger hover events. You can then set the Hover reference property to true or false, and slow down the speed accordingly.
