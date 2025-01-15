//Uppercase<StringType>
//Lowercase<StringType>
//Capitalize<StringType>
//Uncapitalize<StringType>

type City="new york" | "london" | "tokyo"

type UppercaseCity=Uppercase<City>
type lowercaseCity=Lowercase<City>
type capitalizeCity=Capitalize<City>
type uncapitalizeCity=Uncapitalize<City>
//? user to transform the string