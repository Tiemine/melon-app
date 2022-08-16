# Melow Wireframe app

## 💻 Learnings
The application was not difficult to make but since it has many small elements and all of them interact and change data between them I thought there was a huge need for a state management to be used. 

Since Vuex is heavy and I wouldn’t need all of its methods, I used Pinia since it’s lightweight and good to use in these scenarios. 

Also to reutilize code I preferred to create components for every part and used them the most agnostic way possible so even if another page wanted to use it again they didn’t have any dependence from the other component, they only needed their own properties and the store.

Some components would reutilize big chunks of codes and style, so in order to avoid that I tried to use things like v-for and class binding with template strings, so the code was kept short and easy to understand.

The names of the classes were sometimes too big but that was necessary to make the classes cohesive so I used sass to make the syntax easier to understand with nested classes.


