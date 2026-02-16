import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Mail, Phone, User } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(!isOpen); // Keep visible if chat is open
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp integration
    const whatsappMessage = `Hi, I'm ${name}%0A%0AEmail: ${email}%0A%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/1234567890?text=${whatsappMessage}`; // Replace with your number
    
    window.open(whatsappURL, "_blank");
    
    // Reset form
    setMessage("");
    setName("");
    setEmail("");
    setIsOpen(false);
  };

  const quickMessages = [
    { icon: "💬", text: "Get a Quote", message: "I'd like to get a quote for signage" },
    { icon: "📞", text: "Request Call", message: "Please call me back" },
    { icon: "🎨", text: "Design Help", message: "I need help with design" },
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0.8, 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50"
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-br from-[var(--color-gradient)] to-[#b8935f] text-white rounded-full p-4 shadow-2xl hover:shadow-[0_0_30px_rgba(212,165,116,0.5)] transition-shadow duration-300"
          style={{
            boxShadow: "0 8px 32px rgba(212, 165, 116, 0.3)",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={28} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Badge */}
          {!isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
            >
              1
            </motion.span>
          )}

          {/* Pulse Effect */}
          {!isOpen && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[var(--color-gradient)]"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.5 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl"
            >
              Chat with us!
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-gray-900 border-y-4 border-y-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] z-50"
            style={{
              maxHeight: "calc(100vh - 150px)",
            }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--color-gradient)] to-[#b8935f] p-5 text-white">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-1">Chat with NE Signs</h3>
                  <p className="text-sm text-white/90 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    We're online • Reply in minutes
                  </p>
                </motion.div>
              </div>

              {/* Messages Area */}
              <div className="p-5 space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 rounded-2xl rounded-tl-none p-4 backdrop-blur-sm"
                >
                  <p className="text-sm text-white/90 mb-2">
                    👋 Hi there! Welcome to NE Signs!
                  </p>
                  <p className="text-sm text-white/70">
                    How can we help you with your signage needs today?
                  </p>
                </motion.div>

                {/* Quick Reply Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  {quickMessages.map((quick, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMessage(quick.message)}
                      className="w-full flex items-center gap-3 bg-gray-800/30 hover:bg-gray-800/50 border border-white/10 rounded-xl p-3 text-left transition-all duration-300"
                    >
                      <span className="text-2xl">{quick.icon}</span>
                      <span className="text-sm text-white/90">{quick.text}</span>
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Input Form */}
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onSubmit={handleSubmit}
                className="p-5 border-t border-white/10 space-y-3"
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:border-[var(--color-gradient)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:border-[var(--color-gradient)] focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="3"
                    className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-[var(--color-gradient)] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[var(--color-gradient)] to-[#b8935f] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-[var(--color-gradient)] transition-colors">
                    <Phone size={14} />
                    Call Us
                  </a>
                  <span>•</span>
                  <a href="mailto:info@nesigns.com" className="flex items-center gap-1 hover:text-[var(--color-gradient)] transition-colors">
                    <Mail size={14} />
                    Email
                  </a>
                </div>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-gradient);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b8935f;
        }
      `}</style>
    </>
  );
}