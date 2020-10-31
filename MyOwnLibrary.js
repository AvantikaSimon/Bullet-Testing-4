function hasCollided(object1, object2){
  object1Edge = object1.x + object1.width;
  object2Edge = object2.x + object2.width;

  if (object1Edge >= object2Edge){
   return true}

  else {return false};

}    
  
     



