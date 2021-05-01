class Slingshot{
    constructor(bodyA, anchor){
        var option={
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.007,
            length: 1
        }
        
            this.bodyA=bodyA
            this.pointB=anchor
            this.sling = Constraint.create(option)
            World.add(world,this.sling);
    }
    
    attach(body){
            this.sling.bodyA=body;
    }
    
    fly(){
            this.sling.bodyA=null;
    }
    
    display(){
        if(this.sling.bodyA){
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);	
                stroke('red')	
                line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}