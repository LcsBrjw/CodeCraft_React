export function Banner() {

  return (
    <div 
    style={{ backgroundImage: `url(./public/banner-bg.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
    className="h-[120px] flex justify-center items-center mt-16">
        <p className="text-white text-center text-2xl">Toutes les ressources dont vous avez besoin pour créer le web de demain.</p>
    </div>
  );
}