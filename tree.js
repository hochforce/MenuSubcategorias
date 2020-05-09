export default function(data){
  //Pega a tag principal que irá receber o menu
  const tree = document.querySelector('nav#tree')

  //Recebe toda a árvore de elmentos  
  const menu = document.createElement('ul')
  const firstLevel = data.filter(item => !item.parent)
  const getFirstLis = firstLevel.map(buildTree) //Retorna novo array com lis
  getFirstLis.forEach(li => menu.append(li)) //Adicionar Lis ao menu
  
  function buildTree(item){
      //Construir o primeiro li
      const li = document.createElement('li')
      li.innerHTML = item.name

      const children = data.filter(child => child.parent === item.id)

      if(children.length > 0){
        //Adiciona um click para os parents
        li.addEventListener('click', event => {
          event.stopPropagation()
          event.target.classList.toggle('open')
        })

        //Adiciona uma classe identificadora de que tem filhos
        li.classList.add('has-children')

        //Constrói os submenus do filhos
        const subMenu = document.createElement('ul')
        children.map( buildTree)
        .forEach(li => subMenu.append(li))
        li.append(subMenu) 
      }
  
      //Adicionar o li na ul
      return li
  }

  

  

  //Adicionar o menu no HTML
  tree.append(menu)
}