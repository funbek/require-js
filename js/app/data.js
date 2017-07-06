define(function() {

  return {
    getData: function() {
      defineData = {
        first: "1",
        second: "2",
        third: "3"
      };

      for (var key in defineData) {

        console.log( `Ключ: ${key}, Значение: ${defineData[key]}` )

      }
    }
  }
})
