import Debug "mo:base/Debug";

actor DBank {
  stable var currentValue: Nat = 100;

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount: Nat) {

    let tempValue: Int = currentValue - amount;

    if (tempValue >= 0) {

    currentValue -= amount;
    Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Amount too large")
    }

  };

  public query func checkBalance(): async Nat {
    return currentValue
  }
};
