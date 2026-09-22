# React Profiler Results

## Before

- Cart mount: 1.5 ms
- Cart update: 0.7 ms

## Change

I separated the cart item into a `CartItem` component and used `React.memo`.

This prevents a cart item from re-rendering when its props have not changed.

## After

- Cart mount: 7.5 ms
- Cart update: 4 ms

## Notes

The timings can change between runs depending on the browser and computer. The optimization was made to avoid unnecessary renders of individual cart items.