import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sriAnanthaswamyImage from "@/assets/Sri Ananthaswamy.jpeg";

const SriAnanthaswamy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Sri Ananthaswamy
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12"></div>
            
            {/* Sri Ananthaswamy Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src={sriAnanthaswamyImage} 
                alt="Sri Ananthaswamy" 
                className="w-full max-w-sm h-auto rounded-lg shadow-lg object-contain"
              />
            </div>
            
            <div className="prose max-w-none text-text-primary leading-relaxed space-y-6">
              <p>
                Great Saint Sri Ananth Maharaj hails from Bangalore born on the day of Anatha Chaturdashi and is the loving son of Swakula tribe parents Mr.Eswarappa and Mrs.Rudrabai. After marriage Sri Ananth Maharaj renounced the worldly affairs and stepped out of the house towards the goal of peace by chanting the magic words of Ramakrishna Hari. He is in ardent devotee of Lord Vittala. Sr Ananth Maharaj travelled towards Pandari by praying Vittala.
              </p>
              
              <p>
                He established himself for almost 18 years. He started the "Pandari Varakari" culture and conducted "Bhagavat Sapthah", devotional songs, religious discourses, Dhindi bhajans, etc to promote the bhakti awareness among the people. He expected, not money, but - people to drop their bad habits in his arms and adopt good habits from him thru "harimukhemhana". He expected people to forget "I and mine" feelings, To do the duties as God's work. To share the miseries of others and to take the lead in wiping the tears of pain in people's feelings.
              </p>
              
              <p>
                During the spread of epidemic plague disease, Ananth Maharaj personally nursed and fed many patients. He took care of them like his children, and believed that serving humankind is God's work. Sri Ananth Maharaj used to walk to Pandarapur every year creating an positive awareness about his determination. He was a "miracle" yogi and never used to display in public, but used his powers only if required. Even today his sincere followers depending on his bhakti are protected by his divine power. His close and experienced associates will agree to the above statement.
              </p>
              
              <p>
                He was a power house of Atmagnana, his preaching's were followed diligently by the people, which really complete the purpose of his avatar. One of the intellect persons like Mr. K.A. Krishna Iyer described the Maharaj as "Parabramha"
              </p>
              
              <p>
                Ananth Maharaj was a pious and simple man, never expected any financial considerations. He refused the offer made by his bhaktas for construction of Ashram. Sri Ananth Maharah reached the abode of god during 1901 (Year – Purvanama, Pushya Shuddha Saptami- Thursday), In the event of Maharaj journey to god's abode, a divine incident took place- Sri Siddaruda Swamiji in Hubli who was performing his pooja and was offering arati to god, suddenly informed the bhaktas around him that Sri Ananth Maharah soul is flying towards KAILAS – then he said OM NAMA SHIVAYA, After this Siddaruda Swamy eyes was in tears. He then left for meditation.
              </p>
              
              <p>
                Sri Ananth Maharaja's life passed very calmly without any pomp and splendor. Ananth Ashrama in Gandhinagar today is the palce where Sri Ananth Maharaj did his Tapas for the wellbeing of mankind.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">A birds eye view of the activities & development of Sri Anantha ashram:</h3>
              <p>
                <a 
                  href="https://sriananthaswamyashram.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark underline"
                >
                  sriananthaswamyashram.org
                </a>
              </p>
              
              <p>
                Anantha ashrama was established 85 years ago at Gandhinagar in Bangalore. SriAnantha swami of the ashram had a universal love and kind approach towards mankind .To quote an example, during the epidemics spread of plague in Bangalore people use to flee away out of distress. He brought many patients to his place and nursed them & most of the people could survive due to his care..
              </p>
              
              <p>
                Sr iAnantha Maharaj never expected any monetary assistance from anybody but led a simple life. He was contented with a small piece of cloth tied around him. Many devotees came forward to build an ashram but he refused. After completion of swamiji's worldly affairs he was laid to rest at a place where he has performed his tapas.
              </p>
              
              <p>
                The above incident took place in the holy year 1901, which is named as Pushya Shudda saptami(Thursday), and the place is named as Anathashrama. At the first instance four rooms consisting of garbha gruha and the upanyas mandir were constructed. No approach roads were there to visit ashram, some of the devotees helped in constructing road from SC road to ashram. Since it is one of the oldest ashram, many devotees, sadhus, had the opportunity to stay in ashram.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SriAnanthaswamy;