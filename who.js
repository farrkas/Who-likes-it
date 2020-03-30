//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
    const a = names.length;
    if (a <= 0) {
        console.log(`no one likes this`);
    }
    else if (a == 1) console.log(names[0] + ` likes this`);

    else if (a > 3) {
        console.log(names.slice(0, 2).join(`, `) + ` and ` + (a - 2) + ` others like this`);
    }
    else if (a <= 3) {
        console.log(names.slice(0, a - 1).join(`, `) + ` and ` + names.slice(a - 1) + ` like this`);
    }
}

likes([]);// 'no one likes this');
likes(['Peter']);// 'Peter likes this');
likes(['Jacob', 'Alex']);// 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']);// 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']);// 'Alex, Jacob and 2 others like this');
likes(['Alex', 'Jacob', 'Mark', 'Max', 'Max', 'John', 'Mark']);// 'Alex, Jacob and 5 others like this');