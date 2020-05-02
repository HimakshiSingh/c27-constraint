class Chain {
constructor(bodyA,bodyB){

var options = {
   bodyA: bodyA,
   bodyB: bodyB,
   stiffnes = 0.004,
   length = 10

}
  this.chain = Constraint.create(options)
  World .add(world,chain)
    
  
}

}