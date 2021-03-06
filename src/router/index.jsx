import Index from "../views/Index";
import Tweenone1 from '../views/Tweenone1';
import Tweenone2 from '../views/Tweenone2';
import Animate1 from '../views/Animate1';
import QueueAnim1 from '../views/QueueAnim1';
import OverPack from '../views/OverPack';
import TweenonePath1 from '../views/TweenonePath1';
import TweenoneNumber from '../views/TweenoneNumber';
import TweenoneDraw from '../views/TweenoneDraw';
import TweenoneCurve from '../views/TweenoneCurve';
import TweenoneBezier from '../views/TweenoneBezier';
var indexRoutes = [
  { path: "/overpack", name: "OverPack", component: OverPack },
  { path: "/tweenone1", name: "Tweenone1", component: Tweenone1 },
  { path: "/tweenone2", name: "Tweenone2", component: Tweenone2 },
  { path: "/animate1", name: "Animate1", component: Animate1 },
  { path: "/queueanim1", name: "QueueAnim1", component: QueueAnim1 },
  { path: "/tweenonepath1", name: "TweenonePath1", component: TweenonePath1 },
  { path: "/tweenonenumber", name: "TweenoneNumber", component: TweenoneNumber },
  { path: "/tweenonedraw", name: "TweenoneDraw", component: TweenoneDraw},
  { path: "/tweenonecurve", name: "TweenoneCurve", component: TweenoneCurve},
  { path: "/tweenonebezier", name: "TweenoneBezier", component: TweenoneBezier},
  { path: "/", name: "Index", component: Index },
  {
    redirect: true,
    path: "/",
    pathTo: "/",
    name: "首页"
  }
];

export default indexRoutes;
