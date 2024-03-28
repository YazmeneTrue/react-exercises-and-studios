export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://www.thoughtco.com/thmb/FmnBq33XoVWCURygTtIcEMZeSPo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheAlchemistCover-5456318ceb53461b9bb6081ed8b99252.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91qvx7zE7YL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://www.harpercollins.com/cdn/shop/products/9780061227400_653x.jpg?v=1710513808";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Alchemist by Paul Coelho" />
         <img src={book2} alt="Their Eyes Were Watching God by Zora Neal Hurston" />
         <img src={book3} alt="Where The Wild Things Are by Maurice Sendak  " />
      </div>      
   );
}