package payloads;

import java.util.HashMap;
import java.util.Map;

public class PayloadManager {
	
	public static Map<String,Object> loginPayload(String email,String password) {
		Map<String,Object> payload = new HashMap<>();
		payload.put("email",email);
		payload.put("password",password);
		
		return payload;
	}
}
