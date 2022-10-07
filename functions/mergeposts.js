

export const mergePosts = (listOfPosts) => {

    let result = [];

    for (let i = listOfPosts.length - 1; i >= 0 ; i--) {
        const element = listOfPosts[i];

        for (let j = element.length - 1; j >= 0; j--) {
            const item = element[j];
            
            if(result.filter(x => x.id == item.id).length == 0)
            result.push(item);
        }
    }

    return result;
}