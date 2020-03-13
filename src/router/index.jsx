import Index from "../views/Index";
import Tweenone1 from '../views/Tweenone1';
import Tweenone2 from '../views/Tweenone2';

var indexRoutes = [
  { path: "/tweenone1", name: "Tweenone1", component: Tweenone1 },
  { path: "/tweenone2", name: "Tweenone2", component: Tweenone2 },
  { path: "/", name: "Index", component: Index },
  {
    redirect: true,
    path: "/",
    pathTo: "/",
    name: "首页"
  }
];

export default indexRoutes;
