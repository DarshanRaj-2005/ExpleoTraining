from typing import Protocol

class PaymentMethod(Protocol):
    def authorizePayment(self,amount:float) -> bool:
        pass
    def processPayment(self,amount:float) -> bool:
        pass

class Netbanking():

    def authorizePayment(self,amount:float) -> bool:
        print(f"Authorizing net banking payment {amount}")
        return True
    
    def processPayment(self,amount:float) -> bool:
        print(f"Processing net banking payment {amount}")
        return True
    

class UPI():

    def authorizePayment(self,amount:float) -> bool:
        print(f"Authorizing upi payment {amount}")
        return True
    
    def processPayment(self,amount:float) -> bool:
        print(f"Processing upi payment {amount}")
        return True
    

def makePayment(payment : PaymentMethod, amount: float):
    if payment.authorizePayment(amount):
        print("Authorization Successful")
    else:
        print("Authorization Failed")

    if payment.processPayment(amount):
        print("Payment Successful")
    else:
        print("Payment Failed")

nb = Netbanking()
u = UPI()
makePayment(nb,40000.0)
makePayment(u,40000.0)



