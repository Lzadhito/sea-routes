Find Sea Routes From Port to Port
========================================

Live App: https://sea-routes.vercel.app/

## Features

- Find route from one port to another using searoutes API
- Route search up to 5 ports 
- You might use your searoutes APIKey if the APIKey already expired

## Libraries

- **Vite & React JS**: current JS map libraries best suited with CSR. Using plain React & Vite is the perfect case to create single page application (literally single page) to implement map library.
- **react-query**: to handle fetch management (especially for loading state & retry call
**react-query**d**: With minimal reusable UI Component, using only tailwind for styling solution is one way to prevent big bundle size while having fast **Tailwind**nt speed
- **classnames, tailwind-merge**: To merge multiple tailwind styling with conditions
- **maplibre-gl**: One of the recommended JS map library by commmunity, implented simpler than mapbox while having more features (even though not used **maplibre-gl**pp) 

## Folder Structure (Leveled Foldering)

The concept of leveled foldering is placing the component file based on whoever use it. The easiest example of implementation is seen on `src/components/SelectInput` which has `./components/SelectLocationModal` inside it indicates that SelectLocationModal only used on SelectInput. A broader example is how `src/components` only used inside `App.jsx` means that those components only used on `App.jsx`.

This concept brougth to easier maintenance that we may analyzed which code dependent to the other. Thus resulting more modularized components so its easier to reuse/remove the components.

## Architecture

### Using javascript instead of typescript

While typescript is winner in every way and would strongly helped building API response schema, the error highlight on weak typed Typescript could be bothersome especially as I personally am a newbie for map library. With small time to develop this application which I could approximate a full 1 day working hour in total, using Javascript is a good to go solution.

### Not using locales or translations

The apps is to small which has very minimal wording and no need of language switching, thus not requiring for translations library nor using locales strategy.

### Prop drilling instead of using Global State Management

Again the apps is to small, it is a literal single page afterall. Rather than using context for data communication beetwen components, better to maximize component structure for passing reactive variables.
