fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then (user => addPost(user))

.catch(error => console.log(error))

function addPost(post){
    const container = document.querySelector('.container')
    container.textContent = ''
    post.forEach(element=>{
        const h4 = document.createElement('h4')
        h4.textContent = 'Заголовок: ' + element.title
        h4.classList.add('color')
        container.append(h4)
        const p =document.createElement('p')
        p.textContent = 'Статья: ' + element.body
        container.append(p)

    })

}