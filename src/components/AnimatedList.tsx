import { motion } from 'framer-motion';

interface AnimatedListProps {
  items: string[];
  className?: string;
}

export function AnimatedList({ items, className = '' }: AnimatedListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ x: 10 }}
          className="flex items-start"
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"
          />
          <span className="text-gray-700">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}