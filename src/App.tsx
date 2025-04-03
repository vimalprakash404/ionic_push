import { useEffect, useState } from "react";
import { messaging } from "./firebaseConfig";
import { getToken, onMessage } from "firebase/messaging";

const App: React.FC = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  useEffect(() => {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        getToken(messaging, { vapidKey: "BGMq9SIzDOhYWhmiqqW87qngdV8T1rKu0UHN-v3mTEnZprxjVXDlLgv2gomE66BW_IZQ2QEDuX8ebMQEHa1o5hU" })
          .then(token => {
            console.log("🎉 FCM Token:", token);
            setFcmToken(token);
          })
          .catch(err => console.error("❌ FCM Token Error:", err));
      }
    });

    onMessage(messaging, payload => {
      console.log("📩 Foreground Message:", payload);
      new Notification(payload.notification?.title || "New Message", {
        body: payload.notification?.body || "You have a new notification!",
        icon: "/logo.png",
      });
    });
  }, []);

  const copyToClipboard = () => {
    if (fcmToken) {
      navigator.clipboard.writeText(fcmToken);
      alert("FCM Token copied!");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>FCM Token</h2>
      <textarea 
        value={fcmToken || "Fetching token..."} 
        readOnly 
        rows={4} 
        style={{ width: "100%", marginBottom: "10px" }} 
      />
      <br />
      <button onClick={copyToClipboard} disabled={!fcmToken}>
        Copy Token
      </button>
    </div>
  );
};

export default App;

