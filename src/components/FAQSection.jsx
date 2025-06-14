
import { FaQuestionCircle } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";

const FaqSection = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-4xl primary font-bold text-center text-primary flex items-center justify-center gap-2 mb-20">
        <FaQuestionCircle className="text-secondary" /> Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <Slide direction="left" triggerOnce>
          <div className="collapse collapse-arrow  bg-base-200/50">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-secondary-content font-semibold ">
              How do I add a new book to my collection?
            </div>
            <div className="collapse-content text-sm  text-base-content italic ">
              <p>
                Go to the 'Add Book' page, fill out the form, and submit it to add your book to the collection.
              </p>
            </div>
          </div>
        </Slide>

        {/* FAQ 2 */}
        <Slide direction="right" triggerOnce>
          <div className="collapse collapse-arrow  bg-base-200/50">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-secondary-content font-semibold ">
              Can I track my reading progress?
            </div>
            <div className="collapse-content text-sm  text-base-content italic ">
              <p>
                Yes! You can set a book's status to "Read", "Currently Reading", or "Want to Read".
              </p>
            </div>
          </div>
        </Slide>

        {/* FAQ 3 */}
        <Slide direction="left" triggerOnce>
          <div className="collapse collapse-arrow  bg-base-200/50">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-secondary-content font-semibold ">
              How does the review system work?
            </div>
            <div className="collapse-content text-sm  text-base-content italic ">
              <p>
                Users can write and view reviews on any book. Upvotes also help highlight popular ones.
              </p>
            </div>
          </div>
        </Slide>

        {/* FAQ 4 */}
        <Slide direction="right" triggerOnce>
          <div className="collapse collapse-arrow  bg-base-200/50">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-secondary-content font-semibold ">
              How do I view my added books?
            </div>
            <div className="collapse-content text-sm  text-base-content italic ">
              <p>
                Visit the "My Added Books" section from your profile to view, edit, or delete your books.
              </p>
            </div>
          </div>
        </Slide>

        {/* FAQ 5 */}
        <Slide direction="left" triggerOnce>
          <div className="collapse collapse-arrow  bg-base-200/50">
            <input type="checkbox" />
            <div className="collapse-title text-lg text-secondary-content font-semibold ">
              Is authentication required to use all features?
            </div>
            <div className="collapse-content text-sm  text-base-content italic ">
              <p>
                Yes. You must be logged in to add books, leave reviews, track reading status, and upvote books.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </motion.div>
  );
};

export default FaqSection;
