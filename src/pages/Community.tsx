import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import communityImage from "@/assets/Swakulasali Community.jpeg";
import circularLogo from "@/assets/circular-logo.png";

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Swakulasali Community
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            
            {/* Community Logo */}
            <div className="flex justify-center mb-12">
              <img 
                src={circularLogo} 
                alt="Swakulasali Samaj Logo" 
                className="h-48 w-48 md:h-56 md:w-56 rounded-full shadow-2xl border-4 border-primary/30 hover:shadow-3xl transition-all duration-300 hover:scale-105"
              />
            </div>
            
            <div className="prose max-w-none text-text-primary leading-relaxed space-y-6">
              <p>
                Swakulasali (also known as Swakula Sali, 'Sakulasale' , Swakulasale. and Sali or Rugwedsali) is an ethnic community found among Hindus in India. They claim descent from the mythological Jihveshwara. Marathi is the primary language spoken by the Swakula Salis, who also speak local dialects. Their primary professions are weaving, designing and dyeing.
              </p>
              
              <p>
                Divine and deity Sri Jihveshwar, Shiva's son, born through tongue of Shiva, was ordered by Jaganmata Adimaya to prepare various types of costumes by weaving and designing them for protection of body of entire gods and goddesses.
              </p>
              
              <p>
                Fostered by Jaganmata Sri Parvathi, fortunate Shri Jihveshwara being "constume designer Brahma" in Kailasa performed his day to day routine. After getting Brahmopadesha from Lord Brahma himself he completed his study of Vedas in order to attain spirituality and Mukti.
              </p>
              
              {/* Swakulasali Community Image */}
              <div className="my-8 flex justify-center">
                <img 
                  src={communityImage} 
                  alt="Swakulasali Community" 
                  className="w-full max-w-sm h-auto rounded-lg shadow-lg object-contain"
                />
              </div>
              
              <p>
                Sri Jihveshwara is the first scholar who invented not only the art of weaving strands available in the nature such as cotton and silk with excellent concepts, fascinating amalgamation of natural colours, with expertise of creating costumes in various designs and styles, but also invented tools for preparing these costumes.
              </p>
              
              <p>
                He married Ankini and Dashankini, created by Brahma and Saraswathi, in the presence of all gods and goddesses and followed Grahasthashrama. He spread the weaving profession developed by himself through his sons throughout. Four sons of Ankini surrendered themselves in service of Guru and six sons of Dashankini engaged in continuing the task of their father. Various classes of Salis were manifested through them only and spread all over the world as Sali gene. Those who design and weave various types of clothes are 'Sali Community'. Sons of Sri Jihvewshara gradually came down to bhuloka and were introduced as 'Swakulasali Samaj', preparing and distributing costumes to entire humanity. Swakulasalies are 'Vastrakarma Brahmanas' just like Vishwakarma Brahmanas, a semi-brahmin community, who are in the traditional profession of sculpture and making ornaments. There are various gotras of leading maharshis, who follow upanayana and upakarma rituals. They are yajurvedis and followers of Apastanbha principle.
              </p>
              
              <p>
                When Kailas was in danger in the absence of Lord Shiva, Sri Jihveshwara wearing weapons, charioteered Devaganas and killed evil forces. Renowned as good warrior Sri Jihveshwara after enjoying worldly grahastha dharma, he received sanyasa deeksha from his father, Parashiva, wore kashambara and attained spiritual target. He administered spirituality to his sons also.
              </p>
              
              <p>
                When his parents relaxed in Kashi kshetra as Vishwanath and Vishalakshi, he resided in Kashi in the presence of Shiva as Kalabhairava as per blessings of Shiva, serving him there. There is Sri Jihveshwara (Jihvaji) temple now also in Goghat, wherein daily nanda deep, bhajan and pujas are going on. Though Sri Parameshwara is family deity of Swakulasalis, there is no difference between Hari-Hara, the gods in mind. They are the worshippers of Sri Tulaja Bhavani and Sri Dattatreya too. Without confining to any creed, they are following Smarta rituals. They follow Warakari rituals of Pandharpur also very sincerely. They celebrate all Hindu festivals by devotion.
              </p>
              
              <p>
                The Swakulasali Community which migrated from Uttaranchal, Kashi origin has settled in Devagiri and Pratistanpur (Paithan) of Maharashtra. It may be observed that sarees of Paithani style are still famous. As they settled in Maharasthra for many centuries original language of Swakulasalis became Marathi. But Swakulasalis are not Marathas (Kshatriyas). When Chatrapathi Shivaji's father Shahajirao Bhonsle and Ghorpade warriors came to south from Maharashtra for battles, Swakulasalis who accompanied them went towards south and settled in Karnataka and Andhra regions. Though Marathi is their mother tongue they have embraced regional languages affectionately for business and education. Gradually, as they stayed away from their original place and were lagging behind financially and educationally, a few of them have also mixed with Maratha Kshatriyas changing their food and formalities, without any commitment to their original culture.
              </p>
              
              <p>
                The birthday celebration of Sri Jihveshwara by the Swakulasali Samaj brethren, understanding the very gist of standard life, spiritual thinking, profession and sincerity to religion guided by Sri Jivehshwara and inculcating them in their life, is a meaningful celebration. It has become their tradition to perform special sixteen services of puja (shodashopachar), cradle function, lullaby - singing songs to make him sleep, reading Swakulasali purana, keertana-bhajana, chariot festival, distributing anna prasad, arranging functions for organizing the Samaj etc., spearheading religious and cultural programmes appropriately.
              </p>
              
              <p>
                This Swakulasali Samaj is inseparable portion of Hindu religion. Due to globalization, industrialization and modernization the profession of weaving clothes has come to standstill resulting in severe threat to the very existence of the Samaj. Suffered from all these, the Samaj has become very poor, hesitating minded backward community. They are so innocent that they mingle with the local people and get localized easily. As Swakulasalis are Shaivas, they mingle in the language and living styles of Lingayats of north Karnataka and live as Veerashaivas without any difficulties. A few of them because of their satvik nature and practice of vaidik formalities they seem to be brahimins. In Andhra Pradesh and Telangana there are people who forget their own Marathi language following their daily performance while co-living with Telugu linguist. In Tamil Nadu we need others assistance to recognize families of Swakulasali samaj. So, the scattered Swakulasalai Samaj having become lowest population, have depended on other professions going away from traditional weaving. In today's competitive world, Swakulasali Samaj brethren have to remain organized to retain their existence, for thorough development of Samaj brethren, celebrate Bhagawan Sri Jihveshwar jayanthi congregating in huge number through various Swakulasali oranisations established in leading cities of the country. There are organizations at national level and state level. Hostel and community homes are established in Molakalmuru with the assistance of Government. State level educational institution, Gurupeetha and Sri Jihweshwar Mandir are also being established there with the financial assistance of donors and well-wishers of the Samaj. Assistance of Government is sought for construction of Swakulaslai community homes in various cities of the country. The Samaj is looking forward to the helping hand of the Government to get land for suitable accommodation for state level development schemes of the community in the capital.
              </p>
              
              <p>
                Facing many challenges in today's competitive world, knowing the speed, necessity and inevitability to cover the developmental path by the Swakulasali Samaj in various dimensions in several fields like religious, political, educational, industrial, commercial, technical, cultural, fine arts, sports, media, communication and social service, the present youth are marching ahead towards achievement under guidance of senior generation.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">LINEAGE SURNAMES</h3>
              <p>
                One can come across many Swakulsalis with surnames such as Hukkarde, Divate, Sarode, Manu,Dadmode, Firangi, Konge, Edake, Edke, Aakde, Ambekar, Amte, Agadkar, Arcot,Pure,Dinde,Bargaje, Bhambale, Bichakar, Bhandare, Bhanse, Bhanuvanshi, Bhopale, Dumale, Hirekar, Busavale, Chanodkar, Chillal, Devarmani, Dhokale, Ghadveer/Ghadvir, Pendhare, Lahane, Darange, Datrange, Kale, Khamkar, Kumbharkar, Jinde, Pargat, Pendharkar, Halubai, Kausale, Bhopale, Surasgar, Dharankar, Men, Dalvi, Nichal, Ghavate, Gadikar, Kholapure, Kendoley, Bavdhankar, Agedkar, Ashtekar, Jathaar, Jundare, Nagarkar, Misaal, Gonge, Pandkar, Mankar, Mudgal, Pandre, Dhotre,Dhage, Ekbote, Dhorje, Rodge, Nerkar,kalanke, nirmale, Dahotre, Ekbote, Ekkey, Jaikar, Javali, Jujare, Kalburgi, Kamabhavati, Kamble, Kawadi, kapre, Khandate, Ksheersakar, Malekar, Melgiri, Phatak, pissey, Pithe, Sagavkar, Sakaray, Sangale, Sapare, Sapar, Savvasere, Shekatkar, Shelke,Shingade, Shipurkar, Kalyani, Somsole, Srikande, Sure(Surey),Rokhade, Supe, Tagare, Tambe, Tannu, Tigade, Tonape, Ganthade, Tryambake, Upare,Ugale, Vaidya, Vibhute, Wavhal,Dhore,Kapre, Jantre, Patekar, Adhav, Deharkar, Jagtap, Gholak,Vanjre,Sagari Etc... all have taken their surnames named after their particular native places in the region or the villages where their Kuldevta/Kuldevi (family deity) is located OR the profession in which they were engaged in. Mainly the swakulasalis could be called in some areas like veera kshatriya swakulasalis because of wearing janjams and by eating pure non-veg like kings in kingdoms.After brahmana,kshatriya,vishya and the only one big caste is swakulasali/sali/nelli/padmashali all are comes under sali. These caste people uses swakul as their surnames in many regions.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;