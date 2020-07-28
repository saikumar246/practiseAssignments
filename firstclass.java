package firstprogram;

public class firstclass {
	//static variable.
	static String os="android";
	String display="AMO LED";//instance variable
	public void phone(){
		 String phname="Realme";
		int ram=6;
		System.out.println("Phone: "+phname+"\n"+"Ram: "+ram+"GB");
	}
	public static void control(){
		//if-else example
		int ram=6;
		if(ram>=6)
			System.out.println(+ram+"GB Ram has excellent speed ");
		else if(ram==4){
			System.out.println(+ram+"GB Ram is somewhat better for games");
		}
		else{
			System.out.println(+ram+"GB Ram is slow for games ");
		}
		for(int i=0;i<10;i++){
			if(i%2==0)
				continue;
			System.out.println(+i+" is odd number");
		}
		//switch example
		int salary =1000;
		switch(salary){
		case 0: System.out.println("it is not my salary");
		       break;
		case 2000:System.out.println("it is not my salary");
		break;
		case 1000:System.out.println(+salary+" is my salary");
		break;
		default:
			System.out.println("my salary is between 1k to 2k");
		}
		//if-else example using two numbers
		int a=10,b=20;
		if(a<b)
			System.out.println("b is big number");
		else{
			System.out.println("a is big number");
		}
	}
	
	
	public static void main(String[] args) {
		// object creation
      firstclass obj= new firstclass();
        obj.phone();
        System.out.println("Android: "+obj.os);
        // instance variable only accessed by object only like below
        System.out.println("Display: "+obj.display); 
        obj.control();
        
	}

}
