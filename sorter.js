var Sortable = function(element){
  this.element = element;
  this.item   = this.element.querySelectorAll(this.element.dataset.sortable);
  console.log(this.item)
  for(var i = 1; i < this.item.length; i++) {
    console.log('coucou')
    var item = this.item[i];
    console.log(item);
    item.style.position = 'absolute';
  }
};
