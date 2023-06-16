using System.ComponentModel.DataAnnotations;

namespace TestOmegaDevelopment.Models
{
	public class client
	{

		[Required]
		public string Userlogin { get; set; } = null!;
		[Required]
		public int Pin { get; set; }

		public int? Balance { get; set; }

	}
}
