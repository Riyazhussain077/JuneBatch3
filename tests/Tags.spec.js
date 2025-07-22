const {test , expect} = require ('@playwright/test');

test('Test1 @amazon' , async ({page}) => {

    console.log("This is Tag Concept 1");
    
});

test('Test2 @amazon' , async ({page}) => {

    console.log("This is Tag Concept 2");
    
});

test('Test3 @flipkart' , async ({page}) => {

    console.log("This is Tag Concept 3");
    
});

test('Test4 @flipkart' , async ({page}) => {

    console.log("This is Tag Concept 4");
    
});

test('Test5 @amazon@flipkart' , async ({page}) => {

    console.log("This is Tag Concept 5");
    
});