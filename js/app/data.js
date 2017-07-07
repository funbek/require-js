define(function() {

  return {
    getData: function() {
      defineData = {
        first: "1",
        second: "2",
        third: "3"
      };

      for (var key in defineData) {
        var node = document.createElement("div");
        var content = document.createTextNode( `Ключ: ${key}, Значение: ${defineData[key]}` )
        node.appendChild(content);
        document.getElementById("body").appendChild(node);
      }
    }
  }
})
