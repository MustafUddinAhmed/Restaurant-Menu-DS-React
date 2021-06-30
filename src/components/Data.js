export const fetchDemo = (body) => {
  let arr = [];
  body.Recommendations.forEach((element) => {
    let obj = {};
    console.log(element.RestaurantName);
    obj.name = element.RestaurantName;

    obj.childName = [];

    element.menu.forEach((mymenu) => {
      if (mymenu.type === "sectionheader") {
        mymenu.children.forEach((child) => {
          if (child.type === "item") {
            if (child.selected === 1) {
              let childobj = {};
              console.log("-->", child.name);
              childobj.name = child.name;
              let childName = recursion(child.children, 1);
              if (childName.length > 0) childobj.childName = childName;
              obj.childName.push(childobj);
            }
          }
        });
      }
    });
    arr.push(obj);
  });
  return arr;
};

function recursion(children, i) {
  if (!children) return;
  if (children === undefined) return;
  i++;
  let childobj = [];
  children.forEach((child) => {
    let string = "";
    let j = 0;
    for (j = 0; j < i; j++) string += "--";
    string += ">";
    if (child.selected === 1) {
      let children = {};
      console.log(string, child.name);
      children.name = child.name;
      let childName = recursion(child.children, i);
      if (childName.length > 0) children.childName = childName;
      childobj.push(children);
    }
  });
  return childobj;
}
